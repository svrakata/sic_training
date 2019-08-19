const sum = function (a, b) {
    return a + b
}

const sumWith = function (a, sum ) {
    return function( b )
    {
        return sum( a, b )
    }
}

/*

d = [1,2,3,4]


with( d )
{
    [1,_] => 
    [N,N] where N > 5 => N@N 
    [1,2,...rest] => 
    [_,_,_] =>
}

*/

// queryDb( db, auth, da, query )
// a -> b -> c