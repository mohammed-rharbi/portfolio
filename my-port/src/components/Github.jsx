import React from "react";
import GitHubCalendar from "react-github-calendar";


function Github() {
    return (
      <div className="flex justify-center py-10 px-4">
        <div className="flex flex-col items-center w-full max-w-full overflow-x-auto">
          <h1 className="text-2xl font-bold pb-5">
            Days I <strong className="purple">Code</strong>
          </h1>
          <GitHubCalendar
            username="mohammed-rharbi"
            blockSize={18}
            blockMargin={4}
            color="#FFFF00"
            fontSize={16}
            responsive={true}
          />
        </div>
      </div>
    );
  }

export default Github;