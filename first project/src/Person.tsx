interface Props{
    name: string;
    age: number;
    isThere: boolean;
    country:Countries;
}

export enum Countries{
    India="India",
    America="America",
}

export const Person = (props:Props) => {

    

    //While using null as false use | union
   // const [isShow,setShow]=usrState<boolean | null |string>("Sau");
    //setShow("Sayali");//not initialized this

    // const toggleInfo =() => {
    //     setShow({prev} => !prev);
    // };
    return (
        <div>
                <>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>This person: {props.isThere ? "is there" : "is absent"}</p>
            <p>Country : {props.country}</p>
            </>
        </div>
    );
};
