pragma solidity 0.6.12;

import "../interfaces/IBEP20.sol";

interface IMigratorChef {
    function migrate(IBEP20 token) external returns (IBEP20);
}
