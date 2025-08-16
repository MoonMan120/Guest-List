export default function GuestInfo({ guest, renderList }) {
  return (
    <div>
      <h2>{guest.name}</h2>
      <p>Email {guest.email}</p>
      <p>Phone: {guest.phone}</p>
      <p>Bio: {guest.bio}</p>
      <p>Job: {guest.job}</p>
      <button type="button" onClick={renderList}>
        Back
      </button>
    </div>
  );
}
