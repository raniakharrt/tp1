function Villes() {
    const pays=[
        {nom:"Tunisie",ville:"Sfax",photos:"https://i.pinimg.com/1200x/e5/3f/c9/e53fc9a47ea96d5bcb2814c1c5bb8e1e.jpg"},
        {nom:"France",ville:"Marseille",photos:"https://i.pinimg.com/1200x/b3/d6/18/b3d618735641b2bad3e2e65e79a3b7a5.jpg"},
        {nom:"Allemagne",ville:"Bern",photos:"https://i.pinimg.com/736x/75/a6/7f/75a67f7fface37998283df423d479257.jpg"},
        {nom:"Maroc",ville:"Aghadir",photos:"https://i.pinimg.com/736x/cd/00/f8/cd00f8c67aee4f5dbd2ae661b3015cc8.jpg"},];
        return (
        <>
        <h3>Villes préférées</h3>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Ville</th>
                    <th>Image</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                        pays.map((value,ind)=>{
                            return(
                            <tr key={ind}>
                                <td>{value.nom}</td>
                                <td>{value.ville}</td>
                                <td><img src={value.photos} width="100" alt={value.ville} /></td>
                                </tr>
                                )
                                })
                                }
                                </tbody>
                                </table>
                                </>
                                );
}export default Villes;