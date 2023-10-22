import Heading from "../../components/Heading";
import { Switches } from "../../components/Switches";
import Layout from "../components/Lauout";

export default function Page() {
    return (
        <Layout>
            <Heading.h2>Websites</Heading.h2>
            <Switches />
        </Layout>
    );
}
