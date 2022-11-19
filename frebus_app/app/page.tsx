import '../styles/globals.css'
import PocketBase from 'pocketbase'
import {IEvent} from "../types/pocketbaseTypes";
import EventCard from "../components/EventCard";
import "../styles/eventOverview.css"

export const revalidate = 10;

const pb = new PocketBase('http://127.0.0.1:8090');

async function getData() {
    return await pb.collection('events').getFullList<IEvent>(200 /* batch size */, {
        sort: '-created',
    })
}

export default async function Page() {

    const records = await getData()
    console.log(records)

    return (<main>
        {records.map((event) => (
            <EventCard event={event} />
        ))}
    </main>)
}