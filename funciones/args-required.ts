(() => {

    const fullName = ( firstName: string, lastName:string ): string => {

        return `${ firstName } ${ lastName }`;

    }

    const name = fullName( 'Tony', 'Stark' );

    console.log({ name });


})()


