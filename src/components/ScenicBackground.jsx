const ScenicBackground = () => {
  return (
    <div className="scenic-background" aria-hidden="true">
      <div className="scenic-background__orb" />
      <div className="scenic-background__mist scenic-background__mist--top" />
      <div className="scenic-background__mountain scenic-background__mountain--far" />
      <div className="scenic-background__mountain scenic-background__mountain--mid" />
      <div className="scenic-background__mountain scenic-background__mountain--near" />
      <div className="scenic-background__floor" />
      <div className="scenic-background__floor-highlight" />
      <div className="scenic-background__grain" />
    </div>
  );
};

export default ScenicBackground;