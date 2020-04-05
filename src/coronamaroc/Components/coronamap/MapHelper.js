const calculateRadius = d => {
    let rayon = d.cases / 10;
    return 0 < rayon && rayon < 2 ? 2 : rayon;
  };

export default {calculateRadius}