import {IEvent} from "../types/pocketbaseTypes";
import React from "react";

const EventCard = (props: { event: IEvent }) => {

    const event = props.event

    return (
        <div className="eventCard">
            {event.images.length > 0 ?
                <img src={`http://127.0.0.1:8090/api/files/events/${event.id}/${event.images[0]}`} width="100%"
                     alt={"eventPicture"}/> :
                <div className="imageSpacer"/>
            }

            <div className="textSpace">
                <h3>{event.name}</h3>
                <span>Garantierte durchführung</span>
                <p>{event.description}</p>
                <div className="details">
                    <span>Alter 6 - 4 Jahre</span>
                    <span>Preis 40€ - 50€</span>
                    <span>
                        <button>Anmelden</button>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default EventCard