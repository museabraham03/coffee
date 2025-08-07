"use client";

export function StorySection() {
  const locations = [
    {
      name: "Laguna Beach",
      address: "610 N. Coast Hwy Suite 100",
      city: "Laguna Beach, CA"
    },
    {
      name: "Costa Mesa HQ",
      address: "1814 Monrovia Ave",
      city: "Costa Mesa, CA"
    },
    {
      name: "Corte Madera",
      address: "47C Tamal Vista Blvd",
      city: "Corte Madera, CA"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Story */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              OUR STORY
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our QUEST is to source the worlds finest and most unique specialty coffee beans.
              Through meticulous small-batch roasting, the full potential of each origins flavor
              profile is created. The seasonal nature of coffee cherries, varied geography, and
              ever-changing climate, make our journey ENDLESS.
            </p>
          </div>

          {/* Locations */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              LOCATIONS
            </h2>
            <div className="space-y-6">
              {locations.map((location, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">
                    {location.name}
                  </h3>
                  <p className="text-gray-600">
                    {location.address}
                  </p>
                  <p className="text-gray-600">
                    {location.city}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
