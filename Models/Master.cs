namespace Agora.Models
{
    public class Master
    {
        public Guid? IdMaster { get; set; } = Guid.NewGuid();
        public String Name { get; set; } = "";
        public DateTime CreateDate { get; set; } = DateTime.UtcNow;
        public DateTime ModifyDate { get; set; } = DateTime.UtcNow;

    }
}