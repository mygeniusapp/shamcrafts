const ArtisanDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Artisan Dashboard</h1>
      <div className="grid grid-cols-3 gap-6 mt-8">
        <div className="bg-surface p-6 rounded-2xl">Total Sales: $1,240</div>
        <div className="bg-surface p-6 rounded-2xl">Pending Orders: 8</div>
        <div className="bg-surface p-6 rounded-2xl">Profile Views: 342</div>
      </div>
      <div className="mt-8 bg-yellow-100 p-4 rounded-lg border-l-4 border-primary">
        ⚠️ AI Alert: Your "Olive Wood Box" is selling fast – only 3 left!
      </div>
    </div>
  )
}
export default ArtisanDashboard