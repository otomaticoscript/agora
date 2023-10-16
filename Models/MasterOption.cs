namespace Agora.Models
{
    public class MasterOption
    {
        public Guid? IdMaster { get; set; } = Guid.NewGuid();
        public Guid? IdOption { get; set; } = Guid.NewGuid();
        public string Name { get; set; } = "";
        public string Value { get; set; } = "";
        public int Order { get; set; } = 0;

    }
}