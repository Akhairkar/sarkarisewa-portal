import re

filepath = "assets/js/csc-supabase-ui.js"
with open(filepath, "r", encoding="utf-8") as f:
    js = f.read()

old_query_logic = """          const { data, error } = await client
              .from("csc_centers")
              .select("*")
              .or(`pincode.ilike.%${q}%,vle_name.ilike.%${q}%,address.ilike.%${q}%,district.ilike.%${q}%`)
              .limit(100);"""

new_query_logic = """          let query = client.from("csc_centers").select("*");
          
          if (/^\\d+$/.test(q)) {
              // If user typed only numbers, assume Pincode search
              if (q.length === 6) {
                  query = query.eq('pincode', q);
              } else {
                  query = query.ilike('pincode', `${q}%`);
              }
          } else {
              // If text, search Name or District. (Removed 'address' to prevent Supabase 500 timeouts on 5Lakh+ rows)
              query = query.or(`vle_name.ilike.%${q}%,district.ilike.%${q}%`);
          }
          
          const { data, error } = await query.limit(100);"""

if old_query_logic in js:
    js = js.replace(old_query_logic, new_query_logic)
else:
    print("Could not find the block to replace!")

with open(filepath, "w", encoding="utf-8") as f:
    f.write(js)

print("Updated query logic to prevent timeouts!")
