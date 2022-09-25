const imagesJson = {
  images: [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1558865869-c93f6f8482af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbHBhcGVyfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      author: "Orfeas Green",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBhcGVyfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=700&q=60",
      author: "Jezael Melgoza",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2FsbHBhcGVyfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=700&q=60",
      author: "Bia Andrade",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2FsbHBhcGVyfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=700&q=60",
      author: "Henrik Dønnestad",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2FsbHBhcGVyfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=700&q=60",
      author: "Tavin Dotson",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1503212556734-c0ca0c49c8b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdhbGxwYXBlcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=700&q=60",
      author: "Ahmed Rizkhaan",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1439871846984-851e435a999b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdhbGxwYXBlcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=700&q=60",
      author: "Jeremy Gallman",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1477069077421-fb436712c28b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHdhbGxwYXBlcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=700&q=60",
      author: "Caleb Jones",
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHdhbGxwYXBlcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=700&q=60",
      author: "USGS",
    },
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1468272687535-bac12b03f098?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHdhbGxwYXBlcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=700&q=60",
      author: "Adam Porter",
    },
    {
      id: 11,
      url: "https://images.unsplash.com/photo-1501660034796-9860da6cb741?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHdhbGxwYXBlcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=700&q=60",
      author: "Alexandra Gorn",
    },
    {
      id: 12,
      url: "https://images.unsplash.com/photo-1500579886065-5a7705cbf1f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHdhbGxwYXBlcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=700&q=60",
      author: "Tommy Lisbin",
    },
    {
      id: 13,
      url: "https://images.unsplash.com/photo-1496989981497-27d69cdad83e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHdhbGxwYXBlcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=700&q=60",
      author: "Jeremy Perkins",
    },
    {
      id: 14,
      url: "https://images.unsplash.com/photo-1552913627-8d77b1cfcf2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHdhbGxwYXBlcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=700&q=60",
      author: "Martin Brechtl",
    },
    {
      id: 15,
      url: "https://images.unsplash.com/photo-1645314697901-c6d5c4ed5808?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHdhbGxwYXBlcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=700&q=60",
      author: "Ahnaf Piash",
    },
    {
      id: 16,
      url: "https://images.unsplash.com/photo-1629516676075-8ab9f27a2e23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHdhbGxwYXBlcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=700&q=60",
      author: "Faran Raufi",
    },
  ],
};
export default imagesJson