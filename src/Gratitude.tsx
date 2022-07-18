import Layout from "./components/Layout";

function Gratitude() {
  return (
    <div className="">
      <Layout>
        <div className="flex flex-col text-center w-full mt-40">
          <h1 className="md:text-6xl text-4xl font-medium title-font mb-4 text-gray-900">
            Thank you!
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-xl">
            Many thanks to the project maintainer:
          </p>
          <a
            className="hover:text-blue-600 text-xl"
            target="_blank"
            href="https://catfact.ninja/"
          >
            https://catfact.ninja
          </a>
        </div>
      </Layout>
    </div>
  );
}

export default Gratitude;
