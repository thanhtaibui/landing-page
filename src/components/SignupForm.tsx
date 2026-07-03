import { useState, type FormEvent } from 'react';
import { landingPageData } from '../data/landingPageData';

type FormState = {
  name: string;
  contact: string;
  goal: string;
};

const initialFormState: FormState = {
  name: '',
  contact: '',
  goal: '',
};

type SignupFormProps = {
  onSubmitSuccess?: () => void;
};

function SignupForm({ onSubmitSuccess }: SignupFormProps) {
  const { signup } = landingPageData;
  const [formState, setFormState] = useState(initialFormState);
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateField = (field: keyof FormState, value: string) => {
    setFormState((current) => ({ ...current, [field]: value }));
    setError('');
    setIsSubmitted(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = formState.name.trim();
    const contact = formState.contact.trim();
    const goal = formState.goal.trim();
    const contactPattern = /^(\+?\d[\d\s.-]{7,}|[^\s@]+@[^\s@]+\.[^\s@]+)$/;

    if (!name || !contact || !goal) {
      setError('Vui lòng nhập đầy đủ thông tin trước khi gửi.');
      return;
    }

    if (!contactPattern.test(contact)) {
      setError('Email hoặc số điện thoại chưa đúng định dạng.');
      return;
    }

    setIsSubmitted(true);
    setFormState(initialFormState);
    onSubmitSuccess?.();
  };

  return (
    <section className="section signup-section" id="signup">
      <div className="container signup-layout">
        <div className="section-copy signup-copy">
          <p className="eyebrow">{signup.eyebrow}</p>
          <h2>{signup.title}</h2>
          <p>{signup.description}</p>
          <ul className="signup-list">
            {signup.benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>

        <form className="signup-form" onSubmit={handleSubmit} noValidate>
          <label>
            Họ và tên
            <input
              type="text"
              name="name"
              placeholder="Nguyễn Văn A"
              value={formState.name}
              onChange={(event) => updateField('name', event.target.value)}
            />
          </label>

          <label>
            Email hoặc số điện thoại
            <input
              type="text"
              name="contact"
              placeholder="email@example.com hoặc 09xxxxxxxx"
              value={formState.contact}
              onChange={(event) => updateField('contact', event.target.value)}
            />
          </label>

          <label>
            Nhu cầu tư vấn
            <textarea
              name="goal"
              rows={4}
              placeholder="Tôi muốn tìm hiểu về giấc ngủ, phục hồi hoặc kích cỡ nhẫn..."
              value={formState.goal}
              onChange={(event) => updateField('goal', event.target.value)}
            />
          </label>

          {error && <p className="form-message form-message-error">{error}</p>}
          {isSubmitted && <p className="form-message form-message-success">{signup.successMessage}</p>}

          <button className="button button-primary" type="submit">
            {signup.submitLabel}
          </button>
        </form>
      </div>
    </section>
  );
}

export default SignupForm;
