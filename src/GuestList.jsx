import { useState } from "react";
import useGetHooks from "./Hook";
import GuestInfo from "./GuestInfo";

export default function GuestList() {
  const { guests, isLoading } = useGetHooks();
  const [selectedID, setSelectedID] = useState(null);
  const selectedGuest = guests.find((guest) => guest.id === selectedID);

  if (isLoading) return <p>Loading...</p>;

  let moreDetail;
  if (!selectedGuest) {
    moreDetail = <p>Select a guest to see more details</p>;
  } else {
    moreDetail = (
      <GuestInfo guest={selectedGuest} renderList={() => setSelectedID(null)} />
    );
  }

  return (
    <div className="guestPage">
      <h1>Guest List</h1>

      <div className="header">
        <div>Name</div>
        <div>Email</div>
        <div>Phone</div>
      </div>

      <div>
        {guests.map((guest) => (
          <div
            key={guest.id}
            className="columns"
            onClick={() => setSelectedID(guest.id)}
          >
            <p className="guestName">{guest.name}</p>
            <p className="guestEmail">{guest.email}</p>
            <p className="guestPhone">{guest.phone}</p>
          </div>
        ))}
      </div>

      {moreDetail}
    </div>
  );
}
