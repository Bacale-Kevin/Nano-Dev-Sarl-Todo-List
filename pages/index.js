import Head from "next/head";
import CreateTodoForm from "../components/CreateTodoForm";
import TodoList from "../components/TodoList";

export default function Home() {
  return (
    <div className="bg-slate-100 w-full h-screen flex justify-center items-center">
      <Head>
        <title>TODO LIST</title>
        <meta name="description" content="Todo list app for Nono Dev Sarl" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* container */}
      <main className=" w-2/6 h-5/6 mx-auto flex flex-col bg-slate-100">
        <CreateTodoForm />
        <TodoList />
      </main>
    </div>
  );
}
