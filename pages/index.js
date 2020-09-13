import Head from "next/head";
import styles from "../styles/Home.module.css";
import Dashboard from "../components/Dashboard";

export default function Home({ tasks, dataGraph }) {
  return (
    <div>
      <Dashboard tasks={tasks} dataGraph={dataGraph} />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      tasks: [
        {
          name: "Tarea 1",
          status: "1",
          statusDes: "pending",
        },
        {
          name: "Tarea 2",
          status: "2",
          statusDes: "success",
        },
      ],
      dataGraph: {},
    },
  };
};
