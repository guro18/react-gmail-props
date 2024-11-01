export function noXssOrSql(inputValue) {
    const xssPattern = /<\s*script.*?>|<\/\s*script.*?>|<.*?>/i;
    const sqlPattern = /\b(SELECT|INSERT|DELETE|UPDATE|DROP|TABLE|FROM|WHERE|UNION|--|;|--|OR|AND)\b/i;
  
    return xssPattern.test(inputValue) || sqlPattern.test(inputValue);
  }
