export const aiPluginJson = (baseURL: string) => {
  return {
    schema_version: 'v1',
    name_for_human: 'meshitero',
    name_for_model: 'meshitero',
    description_for_human: 'Meshitero Plugin',
    description_for_model:
      'This plugin is a food-terrorism plugin that shows hungry users the pictures specified in the tag.',
    auth: {
      type: 'none'
    },
    api: {
      type: 'openapi',
      url: `${baseURL}/openapi.json`
    },
    logo_url: 'https://ss.yusukebe.com/4203deb97493d70346bfff59b02d0f769467c29df64c072bc947d4a55a495dec_800x636.png',
    contact_email: 'support@example.com',
    legal_info_url: 'https://example.com/legal'
  }
}
