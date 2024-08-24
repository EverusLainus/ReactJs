import React, { useState } from "react";

type Category = "handicapped" | "small" | "large";

interface ParkingSlot {
  id: number;
  category: Category;
  isOccupied: boolean;
  vehicleNo?: string;
  entryTime?: Date;
}

const initialSlots: ParkingSlot[] = [
  { id: 1, category: "handicapped", isOccupied: false },
  { id: 2, category: "small", isOccupied: false },
  { id: 3, category: "large", isOccupied: false },
];

const App: React.FC = () => {
  const [slots, setSlots] = useState<ParkingSlot[]>(initialSlots);
  const [vehicleNo, setvehicleNo] = useState("");
  const [category, setCategory] = useState<Category>("small");

  const handleVehicleEntry = () => {
    const availableSlot = slots.find(
      (slot) => slot.category === category && !slot.isOccupied
    );
    if (availableSlot) {
      setSlots(
        slots.map((slot) =>
          slot.id === availableSlot.id
            ? {
                ...slot,
                isOccupied: true,
                vehicleNo,
                entryTime: new Date(),
              }
            : slot
        )
      );
      setvehicleNo("");
    } else {
      alert("No available slots for this category");
    }
  };

  const handleVehicleExit = (vehicleNo: string) => {
    const slot = slots.find((slot) => slot.vehicleNo === vehicleNo);
    if (slot && slot.entryTime) {
      const duration =
        (new Date().getTime() - slot.entryTime.getTime()) / 3600000;
      const rate =
        slot.category === "handicapped"
          ? 10
          : slot.category === "small"
          ? 20
          : 30;
      const amount = duration * rate;
      alert(`Vehicle exited. Total amount: $${amount.toFixed(2)}`);
      setSlots(
        slots.map((s) =>
          s.id === slot.id
            ? {
                ...s,
                isOccupied: false,
                vehicleNo: undefined,
                entryTime: undefined,
              }
            : s
        )
      );
    } else {
      alert("Vehicle not found");
    }
  };

  return (
    <>
      <h2>Parking Management</h2>
      <div style={{ display: "flex", gap: "1vw", border: "1px solid black" }}>
        <div>
          <h2>Enter Vehicle</h2>
          <input
            type="text"
            placeholder="Vehicle Number"
            value={vehicleNo}
            onChange={(e) => setvehicleNo(e.target.value)}
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as Category)}
          >
            <option value="handicapped">Handicapped</option>
            <option value="small">Small & Mid-Sized</option>
            <option value="large">Large</option>
          </select>
          <button onClick={handleVehicleEntry}>Park Vehicle</button>
        </div>

        <div>
          <h2>Exit Vehicle</h2>
          <input
            type="text"
            placeholder="Vehicle Number"
            onChange={(e) => setvehicleNo(e.target.value)}
          />
          <button onClick={() => handleVehicleExit(vehicleNo)}>Exit</button>
        </div>

        <div>
          <h2>Parking Slots</h2>
          <ul>
            {slots.map((slot) => (
              <li key={slot.id}>
                Slot {slot.id} ({slot.category}) -{" "}
                {slot.isOccupied
                  ? `Occupied by ${slot.vehicleNo}`
                  : "Available"}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
