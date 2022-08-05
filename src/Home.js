import BlogList from "./BlogList";
import useFetch from './useFetch'

const Home = () => {
    const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            {isPending && <h2>Loading...</h2>}
            {blogs && <BlogList blogs={blogs} />}
            {error && <h2 style={{color: "red"}}>{error}</h2>}
        </div>
     );
}
 
export default Home;