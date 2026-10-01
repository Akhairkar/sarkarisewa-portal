const SUPABASE_URL = "https://yjxsgkqspmhxndvhnjcd.supabase.co/rest/v1/csc_centres?select=*&limit=10";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqeHNna3FzcG1oeG5kdmhuamNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4NTMyMTIsImV4cCI6MjEwMDQyOTIxMn0.f9FDnaMGzIUalBCigoiOY8Nfl9rl5qewBXFy9AdLY4I";

async function testFetch() {
    try {
        const response = await fetch(SUPABASE_URL, {
            headers: {
                "apikey": SUPABASE_ANON_KEY,
                "Authorization": `Bearer ${SUPABASE_ANON_KEY}`
            }
        });
        
        const data = await response.json();

        console.log("Raw Supabase Data:");
        console.log(JSON.stringify(data, null, 2));

        const supabaseData = data.map(row => ({
            id: row.id,
            name: row.name || row.center_name || "CSC Centre",
            state: row.state || "Unknown",
            district: row.district || "Unknown",
            pincode: row.pincode,
            address: row.address || `${row.name || row.center_name}, ${row.pincode}`,
            contact: row.owner_phone || row.phone || row.contact || "N/A",
            services: ["Aadhar Update", "PAN Card", "Income Certificate"],
            timings: "9:00 AM - 6:00 PM (Mon-Sat)",
            rating: 4.8,
            is_verified: row.status === 'verified' || row.is_verified === true
        }));

        console.log("\nMapped Data:");
        console.log(JSON.stringify(supabaseData, null, 2));

        // Test filtering
        const stateFilter = "";
        const districtFilter = "";
        const pincodeFilter = "";

        const filtered = supabaseData.filter(center => {
            const matchState = !stateFilter || (center.state && center.state.toLowerCase() === stateFilter);
            const matchDist = !districtFilter || (center.district && center.district.toLowerCase().includes(districtFilter));
            const matchPin = !pincodeFilter || (center.pincode && String(center.pincode).startsWith(pincodeFilter));
            return matchState && matchDist && matchPin;
        });
        
        console.log(`\nFiltered count: ${filtered.length}`);

    } catch (e) {
        console.error("Exception:", e);
    }
}

testFetch();
