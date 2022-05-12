import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div class="card sm:max-w-sm md:max-w-md lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body items-center text-center">
        <h2 class="card-title text-secondary">{name}</h2>
        <p>
          {slots.length ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">Try Another Date!</span>
          )}
        </p>
        <p className="uppercase">
          {slots.length} {slots.length > 1 ? "spaces" : "space"} Available
        </p>
        <div class="card-actions">
          <label
            for="booking-modal"
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
            class="btn btn-secondary text-white"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;