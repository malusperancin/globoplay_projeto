type Props = {
  format?: string;
  releaseYear?: number;
  type?: string;
  headline?: string;
  subset?: {
    slug: string;
  };
  contentBrand?: {
    id?: string;
    name?: string;
  };
  originalContent?: boolean;
  genresNames?: string[];
};

const getContentBrandType = (
  id: string,
  name: string,
  isOriginalContent: boolean
): string => {
  if (isOriginalContent) return "Original Globoplay";
  switch (id) {
    case "196": // TV Globo
      return "";
    case "2113": // Studio Universal
    case "2112": // Universal
    case "2115": // SYFY
      return "Universal+";
    case "2001": // SporTV2
    case "2002": // SporTV3
      return "SporTV";
    default:
      return name;
  }
};

const getCurrentFormat = (format: string): string => {
  switch (format) {
    case "SOAP_OPERA":
      return "Novela";
    case "NEWS":
      return "Jornalismo";
    case "VARIETIES":
      return "Variedade";
    case "TALK_SHOWS":
      return "Talk Show";
    case "REALITIES":
      return "Reality Show";
    case "CARTOONS":
      return "Animação";
    case "SPORTS":
      return "Esporte";
    case "SHOWS":
      return "Música";
    case "DOCUMENTARIES":
      return "Documentário";
    default:
      return "";
  }
};

const getTitleType = (title: Props): string => {
  const typeSpecifieds: any = {
    SERIE: "Série",
    MOVIE: "Filme",
  };
  const titleType = title?.type && typeSpecifieds[title.type];
  const titleFormat = title?.format && getCurrentFormat(title.format);
  const titleSubset = title?.subset?.slug;

  if (titleType === "Série" && titleSubset === "novelas") {
    return "Novela";
  }

  return titleType || titleFormat || "";
};

const getContentBrand = (title: Props): string | undefined => {
  const type = getTitleType(title);

  const genreName = title?.genresNames?.[0] || "";
  const releaseYear = title?.releaseYear || "";
  const contentBrandId = title?.contentBrand?.id || "";
  const contentBrandName = title?.contentBrand?.name || "";
  const isOriginalContent = !!title?.originalContent;
  const contentBrandType = getContentBrandType(
    contentBrandId,
    contentBrandName,
    isOriginalContent
  );
  const firstField =
    type === genreName ? `${genreName}  ` : `${type}  ${genreName}  `;
  const secondField = contentBrandType ? `${contentBrandType}  ` : "";
  const contentBrand = `${firstField}${secondField}${releaseYear}  `;

  return contentBrand;
};

export default getContentBrand;
