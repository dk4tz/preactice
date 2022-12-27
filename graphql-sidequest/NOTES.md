# Tutorial App - Catstronaut

# Schema-First Approach to Development
    - Implement api based on exactly what our client will need
    - 3 Steps
        -- 1 Define Schema - identify the data the feature requires and structure data it into a JSON
            * Goal = create a graph of the objects and relationships
            * Schema = contract between server and client. defines what GraphQL API can and can't do
            * Schema Definition Language (SDL): a collection of types of fields (int, string, bool, Objs)
                ```
                type SpaceCat {
                    name: String!
                    age: Int
                    equipment: [Helmet, Suit, Nip]
                } 
                ```
        -- 2 Backend Implementation - build API in Apollo Server that fetches that data and renders it 
        -- 3 Frontend Implementation - build HTML/CSS components that consumes the data and renders pretty data in the DOM 
    - Advantage = FE and BE engineers can work simultaneously --> schema = shared 
