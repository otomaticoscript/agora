namespace Agora.DAL.Query
{
    class MasterQueries
    {
        public const string GetMaster = "SELECT * FROM master";
        public const string InsertMaster = @"INSERT INTO master (Name) VALUES (@Name);";
        public const string UpdateMaster = @"UPDATE master SET Name = @Name, ModifyDate = @ModifyDate WHERE IdMaster = @IdMaster;";
        public const string DeleteMaster = @"DELETE FROM master  WHERE IdMaster = @IdMaster;";
        public const string GetOptions = "SELECT * FROM master_option WHERE idMaster = @IdMaster ORDER BY `Order`";
        public const string InsertOption = "INSERT INTO master_option (`IdMaster`,`Name`, `Value`, `Order`) VALUES ( @IdMaster, @Name, @Value, @Order)";
        public const string UpdatetOption = "UPDATE master_option SET `Name` = @Name, `Value` =  @Value, `Order` = @Order WHERE `idOption` = @IdOption";
        public const string DeleteOptionByIdOption = @"DELETE FROM master_option WHERE IdOption = @IdOption;";
        public const string DeleteOptionByIdMaster = @"DELETE FROM master_option WHERE IdMaster = @IdMaster;";

/* En TSQL se hace asi
public static string SetMaster = @"
UPDATE Master
SET Name = @NAME, ModifyDate= GETDATE() WHERE IdMaster = @IDMASTER
IF @@ROWCOUNT = 0 BEGIN
    INSERT INTO Master (IdMaster,Name,CreateDate,ModifyDate) Values(@IDMASTER, @NAME,GETDATE(),GETDATE())
END";
*/
    }
}