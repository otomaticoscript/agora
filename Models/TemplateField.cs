namespace Agora.Models
{
    public class TemplateField
    {
        public Guid? IdTemplate { get; set; } = Guid.NewGuid();
        public Guid? IdField { get; set; } = Guid.NewGuid();
        public Guid? IdMaster { get; set; } = Guid.NewGuid();
        public int IdType { get; set; } = 3;
        public string Name { get; set; } = "";
        public string AttributeName { get; set; } = "";
        public string? DefaultValue { get; set; } = "";
        public bool Required { get; set; } = false;
        public int Order { get; set; } = 0;

    }
}