export default function FormsDemo() {
  return (
    <form>
      <div className="form-field">
        <label htmlFor="docs-email">Email</label>
        <p className="info-text">We will never share your email.</p>
        <input
          id="docs-email"
          className="form-control"
          type="email"
          placeholder="you@example.com"
        />
      </div>
      <div className="form-field">
        <label htmlFor="docs-message">Message</label>
        <textarea
          id="docs-message"
          className="form-control"
          rows={4}
          placeholder="Say hello"
        />
      </div>
      <div className="form-actions">
        <button type="button" className="btn-primary">
          Send
        </button>
        <button type="button" className="btn-secondary">
          Cancel
        </button>
      </div>
    </form>
  )
}
