import Feed from '@components/Feed'
const Home = () =>{
    return(
        <section className="w-full flex-center
        flex-col">
        <h1 className="head_text
        text-center">
        Locate & Explore
        <br className="max-md:hidden"/>
        <span className="purple_gradient
        text-center" > AI Powered Prompts</span>
        </h1>
        <p className="desc text-center semi-bold">
        Prompt_GPT is a community-driven platform for
        generating and sharing AI Powered creative prompts.
        </p>
        <Feed />
        </section>
    )
}
export default Home