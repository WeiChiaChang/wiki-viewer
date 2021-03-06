import React from 'react';

const Search = ({ onSearch }) => (
  <input
    className="search__input"
    type="text"
    placeholder="Search Wikipedia..."
    autoFocus
    onChange={onSearch}
  />
);

const WikiResult = ({ url, title, desc }) => (
  <div className="result">
    <a className="result__link" href={url} target="_blank" rel="noopener noreferrer">
      <h3 className="result__title">
        {title}
      </h3>
      <div className="result__content">
        {desc}
      </div>
    </a>
  </div>
);

const WikiResults = ({ results }) => (
  <div className="resultsbox">
    {results.map((result, i) =>
      <WikiResult key={i} {...result} />
    )}
  </div>
);

const WikiViewer = ({ data, onSearch }) => {
  const { result } = data;
  console.log(result)
  const numResults = result.length;
  const searchClassName = numResults
    ? 'search search--compact'
    : 'search';
  const svg = document.getElementById("svg-obj");
  svg.className = numResults ? 'compact' : 'full';

  return (
    <div className="wrapper">
      <div className={searchClassName}>
        <h1 className="search__title">
          Wikipedia Viewer
        </h1>
        <Search onSearch={onSearch}/>
        <span className="search__or">- or -</span>
        <a className="search__random"
           href="https://en.wikipedia.org/wiki/Special:Random"
           target="_blank"
           rel="noopener noreferrer"
        >
          see a random Wikipedia article
        </a>
      </div>
      { numResults > 0 && 
        <WikiResults results={result}/>
      }
    </div>
  );
};

export default WikiViewer;