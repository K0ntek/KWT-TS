import ParticipantForm from "./ParticipantForm";
import { useState, useRef, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { Data, Participant } from "../interfaces";
import { gsap } from "gsap";

const Form = () => {
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [school, setSchool] = useState("");
	const [schoolAddress, setSchoolAddress] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState<number>(0);
	const [type, setType] = useState("Modelarstwo");
	const [participants, setParticipants] = useState<Participant[]>([]);
	const [participantsNumber, setParticipantsNumber] = useState(1);
	const [errorFields, setErrorFields] = useState<string[]>([]);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [captcha, setCaptcha] = useState("");
	const reRef = useRef<ReCAPTCHA>(null);
	const navigate = useNavigate();

	const change = () => {
		setCaptcha(reRef.current!.getValue() as string);
	};

	const handleSubmit = async (e: FormEvent<HTMLElement>) => {
		e.preventDefault();

		const data: Omit<Data, "_id"> & { captcha: string } = {
			name,
			surname,
			school,
			schoolAddress,
			email,
			phone,
			type,
			participants,
			captcha,
		};

		const api = "/api/form";
		const body = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		};

		setIsSubmitting(true);
		const response = await fetch(api, body);

		if (!response.ok) {
			const json = await response.json();
			console.log(json);
			setErrorFields(json.errorFields);
		} else {
			navigate("/");
		}

		setIsSubmitting(false);
	};

	useEffect(() => {
		gsap.fromTo('.form', { y: '-100%', opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
	})

	return (
		<div className="form">
			<form onSubmit={handleSubmit}>
				<h1>OPIEKUN-SZKOŁA</h1>
				<div className="inputs">
					<div className="school">
						<div className="person">
							<input
								type="text"
								onChange={(e) => setSchool(e.target.value)}
								value={school}
								className={errorFields.includes("school") ? "error" : ""}
								required
							/>
							<span>Szkoła</span>
						</div>
						<div className="person">
							<input
								type="text"
								onChange={(e) => setSchoolAddress(e.target.value)}
								value={schoolAddress}
								className={errorFields.includes("schoolAddress") ? "error" : ""}
								required
							/>
							<span>Adres szkoły</span>
						</div>
						<div className="label">
							<label htmlFor="rodzaj">Rodzaj konkursu:</label>
							<select
								id="rodzaj"
								onChange={(e) => setType(e.target.value)}
								value={type}
								className={errorFields.includes("type") ? "error" : ""}
								required
							>
								<option value="Modelarstwo">Modelarstwo</option>
								<option value="Interdyscypliny">Interdyscypliny</option>
								<option value="Praca_własna">Praca własna</option>
							</select>
						</div>
					</div>
					<div className="personal">
						<div className="person">
							<input
								type="text"
								onChange={(e) => setName(e.target.value)}
								value={name}
								className={errorFields.includes("name") ? "error" : ""}
								required
							/>
							<span>Imię opiekuna</span>
						</div>
						<div className="person">
							<input
								type="text"
								onChange={(e) => setSurname(e.target.value)}
								value={surname}
								className={errorFields.includes("surname") ? "error" : ""}
								required
							/>
							<span>Nazwisko opiekuna</span>
						</div>
						<div className="person">
							<input
								type="email"
								onChange={(e) => setEmail(e.target.value)}
								value={email}
								className={errorFields.includes("email") ? "error" : ""}
								required
							/>
							<span>E-mail</span>
						</div>
						<div className="person">
							<input
								type="tel"
								onChange={(e) => setPhone(Number(e.target.value))}
								value={phone ? phone.toString() : ""}
								className={errorFields.includes("phone") ? "error" : ""}
								required
							/>
							<span>Numer telefonu</span>
						</div>
					</div>
				</div>

				<div className="uczniowie">
					<h1>UCZNIOWIE</h1>
					<hr className="solid" />
					<div className="uczestnicy">
						{[...Array(5)].map((item, index) => (
							<ParticipantForm
								key={index + 1}
								participants={participants}
								setParticipants={setParticipants}
								id={index + 1}
							/>
						))}
					</div>
				</div>
				{/* <ReCAPTCHA
					className="captcha"
					onChange={change}
					sitekey={process.env.REACT_APP_RECAPTCHA as string}
					ref={reRef}
				/> */}
				<input type="submit" value="Zarejestruj" disabled={!captcha || isSubmitting} />
			</form>
		</div>
	);
};

export default Form;
