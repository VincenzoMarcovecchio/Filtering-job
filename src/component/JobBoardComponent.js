import React from "react";

const JobBoardComponent = ({
  //destructuring from  job prop
  job: {
    id,
    newtag,
    company,
    logo,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  },
  //that func
  handleTagClick,
}) => {
  const tags = [role, level]; //grab the role name and level name

  if (tools) {
    tags.push(...tools); //tools going into tags
  }
  if (languages) {
    tags.push(...languages); //languages going into tags
  }

  return (
    <div
      className={`rounded flex flex-col bg-white shadow-md my-16 mx-10 p-5 ${
        featured && "border-l-4 border-black border-solid"
      } sm:flex-row sm:my-9`}
    >
      <div>
        <img
          className="mb-4 -mt-16 w-20 h-20 sm:mt-0 sm:h-24 sm:w-24 sm:m-0 "
          src={logo}
          alt={company}
        />
      </div>
      <div className=" flex flex-col justify-between ml-4 text-left">
        <h3 className="font-bold text-teal-500">
          {company}
          {featured && (
            <span className="uppercase text-white bg-gray-800 font-bold m-2 py-1 px-2 rounded-full text-sn">
              Featured
            </span>
          )}
          {newtag && (
            <span className="text-teal-100 bg-teal-500 font-bold m-2 py-1 px-2 rounded-full uppercase text-sn">
              New
            </span>
          )}
        </h3>
        <h2 className="font-bold text-xl my-2 sm:my-0">{position}</h2>
        <p className="text-gray-700">
          {postedAt} ◦ {contract} ◦ {location}
        </p>
      </div>
      <div className="flex flex-wrap items-center m-4 pt-4 border-t-2 border-gray-500 border-solid sm:border-0 sm:pt-0 sm:ml-auto sm:m-0 ">
        {tags
          ? tags.map((tag) => (
              <span
                onClick={() => handleTagClick(tag)}
                className=" cursor-pointer text-teal-500 bg-teal-100 font-bold mr-4 mt-4 p-2 rounded"
              >
                {tag}
              </span>
            ))
          : ""}
      </div>
    </div>
  );
};
export default JobBoardComponent;
