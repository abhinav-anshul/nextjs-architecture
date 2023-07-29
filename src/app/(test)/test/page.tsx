import axios from "@/services/axios";

interface Post {
    userId: number | string;
    id: number | string;
    title: string;
    body: string;
  }

  export default async function Page(){
    const response = await axios.get("/posts");
    const data = response.data;

    return (
        <div>
           {data.map((element: Post) => (
                <div key={element.id}>
                    <h1 className="bg-rose-400">{element.title}</h1>
                </div>
))}
        </div>
    );
}

