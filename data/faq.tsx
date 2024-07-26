import * as React from "react";

const faq = {
  title: "Frequently asked questions",
  // description: '',
  items: [
    {
      q: "How can we reach out through email?",
      a: (
        <p>
          You can reach out to us on{" "}
          <a
            style={{ color: "purple" }}
            href="mailto:thesocialclubai@gmail.com"
          >
            thesocialclubai@gmail.com
          </a>{" "}
          if you have any questions.
        </p>
      ),
    },
    {
      q: "What is your business phone number?",
      a: (
        <p>
          You can reach out to us through call at{" "}
          <a style={{ color: "purple" }}>925-915-2911</a>.
        </p>
      ),
    },
    // {
    //   q: 'Can I use Saas UI Pro for Open Source projects?',
    //   a: 'No currently not. A large part of Saas UI is already released under MIT license. We try to give back to the community as much as possible.',
    // },
    // {
    //   q: 'Does Saas UI include Figma, Sketch or other design files?',
    //   a: 'No, Saas UI does not include any design assets. Maintaining design resources costs a lot of extra effort. We believe small teams can move much faster by designing directly in code, with help of Storybooks.',
    // },
  ],
};

export default faq;
