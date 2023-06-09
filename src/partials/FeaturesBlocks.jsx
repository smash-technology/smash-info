import React from "react";

function FeaturesBlocks() {
  return (
    <section className="relative mt-12 mb-3">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-0 md:mt-24 lg:mt-0 bg-slate-900 pointer-events-none"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto pb-12 md:pb-20 text-center">
            <h2 className="h2 mb-4 text-white">How Smash works</h2>
            <p className="text-xl text-gray-400">
              Smash is revolutionizing the way motivated learners with
              non-traditional backgrounds attain the initial skills and
              experience needed for a lasting career in the tech industry
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <div className="relative flex flex-col items-center px-6 py-8 bg-white rounded shadow-xl">
              <svg
                className="w-16 h-54 p-1 -mt-1 mb-4 mx-auto"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-indigo-800"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeWidth="2">
                    <path
                      className="stroke-current text-indigo-300"
                      d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M20.571 37.714h5.715L36.57 26.286h8"
                    />
                    <path
                      className="stroke-current text-indigo-300"
                      strokeLinecap="square"
                      d="M41.143 34.286l3.428 3.428-3.428 3.429"
                    />
                    <path
                      className="stroke-current text-white"
                      strokeLinecap="square"
                      d="M41.143 29.714l3.428-3.428-3.428-3.429"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-2">
                Challenge
              </h4>
              <p className="text-gray-600 text-center">
                Entering the tech industry is challenging, especially without a
                traditional four-year technical degree. College degrees can cost
                up to $70,000 per year, and acquiring technology skills alone
                amounts to approximately $38,507, 60% more than other
                industries. Aspiring technologists also face limited resources
                for building their resume and a lack of networking opportunities
                with peers, mentors, and potential employers outside of college.
                These factors pose significant setbacks for individuals aspiring
                to enter the tech field.
              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center px-6 py-8 bg-white rounded shadow-xl">
              <svg
                className="w-16 h-54 p-1 -mt-1 mb-4 mx-auto"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-indigo-800"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeLinecap="square" strokeWidth="2">
                    <path
                      className="stroke-current text-indigo-300"
                      d="M38.826 22.504a9.128 9.128 0 00-13.291-.398M35.403 25.546a4.543 4.543 0 00-6.635-.207"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M19.429 25.143A6.857 6.857 0 0126.286 32v1.189L28 37.143l-1.714.571V40A2.286 2.286 0 0124 42.286h-2.286v2.285M44.571 25.143A6.857 6.857 0 0037.714 32v1.189L36 37.143l1.714.571V40A2.286 2.286 0 0040 42.286h2.286v2.285"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-2">
                Outcome
              </h4>
              <p className="text-gray-600 text-center">
                Smash is a free project-based learning and apprenticeship
                solution that equips students with valuable hands-on experience,
                as well as career and networking opportunities. Through a focus
                on in-demand technical skills and industry-relevant projects,
                Smash provides a distinctive and immersive learning experience
                that effectively prepares students for success in their chosen
                field.
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center px-6 py-8 bg-white rounded shadow-xl">
              <svg
                className="w-16 h-54 p-1 -mt-1 mb-4 mx-auto"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-indigo-800"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeWidth="2" transform="translate(19.429 20.571)">
                    <circle
                      className="stroke-current text-white"
                      strokeLinecap="square"
                      cx="12.571"
                      cy="12.571"
                      r="1.143"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696"
                    />
                    <path
                      className="stroke-current text-indigo-300"
                      d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-2">
                Impact
              </h4>
              <p className="text-gray-600 text-center">
                Smash revolutionizes the education and recruitment processes,
                breaking through barriers for students and recruiters alike. It
                prepares students for the job market through projects from
                reputable tech companies and fosters networking opportunities.
                Simultaneously, it serves as a talent pool for recruiters,
                streamlining the hiring process and ensuring successful
                placements. By bridging the student-employer gap, our platform
                creates a mutually beneficial environment, pushing traditional
                boundaries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
