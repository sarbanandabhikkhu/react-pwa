import React from "react";
import pārājika from "./../data/pārājika.json";
import pācittiya from "./../data/pācittiya.json";

const Content = () => {
  return (
    <div className="Content">
      {pārājika.map(({ title, content }) => {
        return (
          <article>
            <h3 className="heading">{title}</h3>
            {content.split(/\n\n/).map((paragraph) => {
              return (
                <p className="paragraph">
                  {paragraph
                    .replace(/\[/, "———[")
                    .replace(/\]/, "]———")
                    .split(/———/)
                    .map((quote) => {
                      if (quote[0] === "[")
                        return <span className="quote">{quote}</span>;
                      return quote;
                    })}
                </p>
              );
            })}
          </article>
        );
      })}
    </div>
  );
};

export default Content;
