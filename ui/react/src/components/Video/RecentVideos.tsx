import IFrameVideo from './IFrameVideo';

function RecentVideos() {
  const videos = [
    {
      id: 1,
      url: 'https://www.youtube.com/embed/Brvn7nAgZqA',
      title: 'Quick pop to the shops',
    },
    {
      id: 2,
      url: 'https://www.youtube.com/embed/AJ79HZ57mtc',
      title: 'Ride To The Test Centre (UK Bike Module 1)',
    },
    {
      id: 3,
      url: 'https://www.youtube.com/embed/lftJmGpNU14',
      title: 'Module 1 Highlights',
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {videos.map((video) => (
        <div key={video.id}>
        <IFrameVideo url={video.url} title={video.title} />
        </div>
      ))}
    </div>
  );
}

export default RecentVideos;
