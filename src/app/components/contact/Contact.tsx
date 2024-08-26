"use client";
import { FormEventHandler, useEffect, useState } from "react";
import styles from "./contact.module.scss";
import { Plane } from "../icons/Icons";

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (error) setError(null);
      if (success) setSuccess(null);
    }, 3500);

    return () => clearTimeout(timeout);
  }, [error, success]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    // Validate values before sending
    const dataObject = Object.fromEntries(data);
    if (dataObject.name && dataObject.email && dataObject.message) {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(
          data as unknown as URLSearchParams
        ).toString(),
      });

      // Success & error handling
      if (response.ok) {
        setError(null);
        form.reset();
        setSuccess("Thanks! Your entry has been recorded.")
      } else {
        setError(`Error: ${response.status} ${response.statusText}`);
      }
    } else {
      setError("An error occured!");
    }
    setSubmitting(false);
  };

  return (
    <section id="contact" className={styles.container}>
      <h2>Contact Me</h2>

      <p>
        You can reach me on{" "}
        <a href="https://www.linkedin.com/in/climaxmba/" target="_blank">
          LinkedIn
        </a>
        , or send me a message:
      </p>

      {error ? (
        <div className={styles.error}>{error}</div>
      ) : success ? (
        <div className={styles.success}>{success}</div>
      ) : <></>}

      <form
        action="/"
        name="contact"
        onSubmit={handleSubmit}
        method="post"
        className={styles.form}
        {...{ "data-netlify": "true" }}
      >
        <input type="hidden" name="form-name" value="contact" />
        <label>
          Name:{" "}
          <input type="text" name="name" placeholder="Alex Smith" required />
        </label>
        <label>
          Email:{" "}
          <input
            type="email"
            name="email"
            placeholder="alexsmith@example.com"
            required
          />
        </label>

        <label>
          Message:
          <textarea
            name="message"
            cols={30}
            rows={10}
            placeholder="Your message goes here..."
            required
          ></textarea>
        </label>

        {submitting ? (
          <button type="submit" disabled>
            Submitting...
          </button>
        ) : (
          <button title="Submit" className="icon-btn" type="submit">
            {" "}
            Submit <Plane />
          </button>
        )}
      </form>
    </section>
  );
}
