export default function AuthForm({ email, setEmail, password, setPassword, handleSubmit }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" />
      </form>
    </div>
  );
}
