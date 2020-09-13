import { getAllTaskIds } from "../../lib/tasks";
import Task from "../../components/Task";

export default function TaskPage({task}) {
  return <Task task={task} />;
}

export async function getStaticPaths() {
  const paths = [
    {
      params: {
        id: "1",
      },
    },
    {
      params: {
        id: "2",
      },
    },
  ];
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  //const postData = await getPostData(params.id)
  const paths = await getAllTaskIds();
  return {
    props: {
        task:{
            name: "tarea 1"
        }
    },
  };
}
