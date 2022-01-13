export default function AuthForm({ email, setEmail, password, setPassword, handleSubmit }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}
