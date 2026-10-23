// 1. Early return with if — good for whole-component decisions
function Dashboard({ user }) {
  if (!user) {
    return <p>Please log in.</p>;
  }
  return <h1>Welcome, {user.name}</h1>;
}
 
// 2. Ternary — choose between two things inline
function Status({ isOnline }) {
  return <span>{isOnline ? "🟢 Online" : "⚪ Offline"}</span>;
}
 
// 3. && — show something or nothing
function Inbox({ unread }) {
  return (
    <div>
      <h2>Inbox</h2>
      {unread > 0 && <p>You have {unread} unread messages.</p>}
    </div>
  );
}
