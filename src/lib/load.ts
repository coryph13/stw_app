// The following function is shared
// with getStaticProps and API routes
// from a `lib/` directory
export async function loadProducts() {
    // Call an external API endpoint to get posts
    const res = await fetch('http://api.stw.test/products/all')
    const data = await res.json()
   
    return data
  }