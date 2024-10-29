type Member={
    email: string
    name: string
    password: string
    phone: string
    address: string
    img?: string
    structure_role: string
    department_id: string
    departement: Departement
    projects?: any
}
type Departement={
    map(arg0: (departement: Departement) => React.JSX.Element): React.ReactNode
    id: string
    name: string
    desc: string
    members?: Member[]
}

type dataDepartement={
    id?: string
    name: string
    description: string
}