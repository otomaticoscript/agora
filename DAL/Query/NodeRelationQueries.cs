namespace Agora.DAL.Query
{
    class NodeRelationQueries
    {
        public const string GetNodeRelation = @"
            SELECT * FROM node_relation WHERE node_relation.IdNode = @IdNode";
        public const string GetNodeRelationByIdNodeRoot = @"
            SELECT * FROM node_relation WHERE node_relation.IdNodeRoot = @IdNode
            ORDER BY IdRelation DESC";
        public const string GetNodeRelationByIdNodeParent = @"
        with recursive number_printer AS(
            SELECT * FROM node_relation
            WHERE node_relation.IdNodeParent = @IdNode
            UNION
            SELECT node_relation.*
            FROM node_relation
            INNER JOIN  number_printer ON node_relation.IdNodeParent = number_printer.IdNode
        )
        SELECT * FROM number_printer;";
        public const string InsertNodeRelation = @"
        INSERT INTO node_relation (IdNode, IdNodeParent,  IdNodeRoot, `Order`)
        VALUES (@IdNode, @IdNodeParent, @IdNodeRoot, @Order);";
        public const string UpdateNodeRelation = @"
        UPDATE node_relation 
            SET IdNode = @IdNode, IdNodeParent = @IdNodeParent, IdNodeRoot = @IdNodeRoot, `Order` = @Order
        WHERE IdRelation = @IdRelation;";
        public const string DeleteNodeRelationByIdNodeRoot = @"DELETE FROM node_relation  WHERE IdNodeRoot = @IdNode;";
        public const string DeleteNodeRelationByIdNodeParent = @"DELETE FROM node_relation  WHERE IdNodeParent = @IdNode OR IdNode = @IdNode;";
    }
}