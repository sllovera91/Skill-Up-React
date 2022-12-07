export const handleDate = (date) => {
    return date.slice(0, 10);
};

export const handleConcept = (concept) => {
  return concept.slice(0, 35).slice(12, 24).replace("curr", "").replace(/['",]+/g, "");
  };
